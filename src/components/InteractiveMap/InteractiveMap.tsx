import React, { forwardRef, useImperativeHandle, useRef, useMemo, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { styles } from './InteractiveMap.styles';

import { getLeafletHtml } from './leafletTemplate';

export interface InteractiveMapRef {
  centerOnLocation: (lat: number, lng: number, zoom?: number, offsetY?: number) => void;
  updateUserLocation: (lat: number, lng: number) => void;
  removeUserLocation: () => void;
}

interface InteractiveMapProps {
  initialLat?: number;
  initialLng?: number;
  initialZoom?: number;
  userLocation?: { latitude: number; longitude: number } | null;
}

export const InteractiveMap = forwardRef<InteractiveMapRef, InteractiveMapProps>(
  (
    {
      initialLat = 30.0131,
      initialLng = 30.9850,
      initialZoom = 13,
      userLocation = null,
    },
    ref
  ) => {
    const webViewRef = useRef<WebView>(null);
    const [isMapReady, setIsMapReady] = useState(false);
    const [hasError, setHasError] = useState(false);

    const prevUserRef = useRef<{ lat?: number; lng?: number }>({});

    const htmlContent = useMemo(() => {
      return getLeafletHtml({ initialLat, initialLng, initialZoom });
    }, [initialLat, initialLng, initialZoom]);

    useImperativeHandle(ref, () => ({
      centerOnLocation: (lat: number, lng: number, zoom = 15, offsetY = 0) => {
        if (isMapReady && webViewRef.current) {
          webViewRef.current.injectJavaScript(`
            if (window.centerOnLocation) {
              window.centerOnLocation(${lat}, ${lng}, ${zoom}, ${offsetY});
            }
            true;
          `);
        }
      },
      updateUserLocation: (lat: number, lng: number) => {
        if (isMapReady && webViewRef.current) {
          webViewRef.current.injectJavaScript(`
            if (window.updateUserLocation) {
              window.updateUserLocation(${lat}, ${lng});
            }
            true;
          `);
        }
      },
      removeUserLocation: () => {
        if (isMapReady && webViewRef.current) {
          webViewRef.current.injectJavaScript(`
            if (window.removeUserLocation) {
              window.removeUserLocation();
            }
            true;
          `);
        }
      },
    }));

    const onMessage = (event: WebViewMessageEvent) => {
      try {
        const data = JSON.parse(event.nativeEvent.data);
        if (data.type === 'ready') {
          setIsMapReady(true);
          setHasError(false);

          if (userLocation) {
            webViewRef.current?.injectJavaScript(`
              if (window.updateUserLocation) {
                window.updateUserLocation(${userLocation.latitude}, ${userLocation.longitude});
              }
              true;
            `);
          }
        } else if (data.type === 'error') {
          setHasError(true);
        }
      } catch {
        //
      }
    };

    if (isMapReady) {
      if (userLocation) {
        if (prevUserRef.current.lat !== userLocation.latitude || prevUserRef.current.lng !== userLocation.longitude) {
          prevUserRef.current = { lat: userLocation.latitude, lng: userLocation.longitude };
          webViewRef.current?.injectJavaScript(`
            if (window.updateUserLocation) {
              window.updateUserLocation(${userLocation.latitude}, ${userLocation.longitude});
            }
            true;
          `);
        }
      } else if (prevUserRef.current.lat !== undefined) {
        prevUserRef.current = {};
        webViewRef.current?.injectJavaScript(`
          if (window.removeUserLocation) {
            window.removeUserLocation();
          }
          true;
        `);
      }
    }

    const WebViewComponent = WebView as any;

    return (
      <View style={styles.container} pointerEvents="box-none">
        <WebViewComponent
          ref={webViewRef}
          source={{
            html: htmlContent,
            baseUrl: 'https://unpkg.com',
          }}
          style={styles.webView}
          onMessage={onMessage}
          onError={() => setHasError(true)}
          onHttpError={() => setHasError(true)}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={false}
          scalesPageToFit={false}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          originWhitelist={['*']}
          mixedContentMode="always"
        />

        {!isMapReady && !hasError && (
          <View style={styles.loadingOverlay} pointerEvents="none">
            <ActivityIndicator size="large" color="#2563EB" />
            <Text style={styles.loadingText}>Loading interactive map...</Text>
          </View>
        )}

        {hasError && (
          <View style={styles.errorOverlay} pointerEvents="box-none">
            <Text style={styles.errorTitle}>Unable to load map tiles</Text>
            <Text style={styles.errorSubtitle}>Please check your internet connection.</Text>
          </View>
        )}
      </View>
    );
  }
);
