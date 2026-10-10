const LEAFLET_VERSION = '1.9.4';

export interface LeafletTemplateParams {
  initialLat: number;
  initialLng: number;
  initialZoom: number;
}

export const getLeafletHtml = ({
  initialLat,
  initialLng,
  initialZoom,
}: LeafletTemplateParams): string => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet@${LEAFLET_VERSION}/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@${LEAFLET_VERSION}/dist/leaflet.js"></script>
  <style>
    * { box-sizing: border-box; }
    html, body, #map {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      background-color: #E8EEF6;
      overflow: hidden;
    }
    .custom-user-wrap {
      position: relative;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .custom-user-dot {
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background: #10B981;
      border: 3px solid #FFFFFF;
      box-shadow: 0 2px 6px rgba(16,185,129,0.5);
      z-index: 2;
    }
    .custom-user-pulse {
      position: absolute;
      width: 32px;
      height: 32px;
      border-radius: 16px;
      background: rgba(16,185,129,0.28);
      animation: userPulse 2s infinite ease-out;
      z-index: 1;
    }
    .custom-user-label {
      position: absolute;
      top: 26px;
      background: #10B981;
      color: #FFFFFF;
      font-size: 10px;
      font-weight: 800;
      padding: 2px 6px;
      border-radius: 6px;
      white-space: nowrap;
      box-shadow: 0 1px 4px rgba(0,0,0,0.2);
    }
    @keyframes userPulse {
      0% { transform: scale(0.6); opacity: 1; }
      100% { transform: scale(1.6); opacity: 0; }
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <script>
    var map;
    var userMarker = null;

    try {
      map = L.map('map', {
        zoomControl: false,
        attributionControl: false
      }).setView([${initialLat}, ${initialLng}], ${initialZoom});

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
      }).addTo(map);

      window.updateUserLocation = function(lat, lng) {
        if (!map) return;
        var pos = [lat, lng];
        if (userMarker) {
          userMarker.setLatLng(pos);
        } else {
          var userIcon = L.divIcon({
            className: 'user-pin-wrap',
            html: '<div class="custom-user-wrap"><div class="custom-user-pulse"></div><div class="custom-user-dot"></div><div class="custom-user-label">You</div></div>',
            iconSize: [36, 36],
            iconAnchor: [18, 18]
          });
          userMarker = L.marker(pos, { icon: userIcon }).addTo(map);
        }
      };

      window.removeUserLocation = function() {
        if (!map) return;
        if (userMarker) {
          map.removeLayer(userMarker);
          userMarker = null;
        }
      };

      window.centerOnLocation = function(lat, lng, zoom, offsetY) {
        if (!map) return;
        var targetZoom = zoom || 15;
        if (offsetY) {
          var targetPoint = map.project([lat, lng], targetZoom);
          var offsetPoint = L.point(targetPoint.x, targetPoint.y + offsetY);
          var offsetLatLng = map.unproject(offsetPoint, targetZoom);
          map.setView(offsetLatLng, targetZoom, { animate: true });
        } else {
          map.setView([lat, lng], targetZoom, { animate: true });
        }
      };

      if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'ready' }));
      }
    } catch (err) {
      if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'error', message: String(err) }));
      }
    }
  </script>
</body>
</html>`;
};
