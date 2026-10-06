const React = require('react');
const Feather = require('react-native-vector-icons/Feather').default;
const Ionicons = require('react-native-vector-icons/Ionicons').default;
const MaterialCommunityIcons = require('react-native-vector-icons/MaterialCommunityIcons').default;

function createVectorIcon(Component, iconName, defaultColor = '#2563EB') {
  return function VectorIcon(props) {
    const size =
      typeof props.size === 'number'
        ? props.size
        : parseInt(props.size, 10) || 20;
    const color = props.color || defaultColor;
    return React.createElement(Component, {
      name: iconName,
      size: size,
      color: color,
      style: props.style,
    });
  };
}

const icons = {
  FaBell: createVectorIcon(Feather, 'bell', '#FFFFFF'),
  FaArrowRight: createVectorIcon(Feather, 'arrow-right', '#3B82F6'),
  FaHandPaper: createVectorIcon(Ionicons, 'hand-left-outline', '#FBBF24'),
  FaTicketAlt: createVectorIcon(MaterialCommunityIcons, 'ticket-outline', '#2563EB'),
  FaBus: createVectorIcon(MaterialCommunityIcons, 'bus', '#2563EB'),
  FaHistory: createVectorIcon(MaterialCommunityIcons, 'history', '#2563EB'),
  FaSlidersH: createVectorIcon(Feather, 'sliders', '#2563EB'),
  FaCalendarAlt: createVectorIcon(Feather, 'calendar', '#2563EB'),
  FaMapMarkedAlt: createVectorIcon(Feather, 'map-pin', '#2563EB'),
  FaClock: createVectorIcon(Feather, 'clock', '#2563EB'),
  FaCog: createVectorIcon(Feather, 'settings', '#2563EB'),
  FaHome: createVectorIcon(Feather, 'home', '#2563EB'),
  FaRoute: createVectorIcon(MaterialCommunityIcons, 'train-car', '#94A3B8'),
  FaClipboardList: createVectorIcon(MaterialCommunityIcons, 'ticket-confirmation-outline', '#94A3B8'),
  FaShieldAlt: createVectorIcon(Ionicons, 'location-outline', '#94A3B8'),
  FaUser: createVectorIcon(Feather, 'user', '#94A3B8'),
  FaEnvelope: createVectorIcon(Feather, 'mail', '#94A3B8'),
  FaLock: createVectorIcon(Feather, 'lock', '#94A3B8'),
  FaEye: createVectorIcon(Feather, 'eye', '#94A3B8'),
  FaEyeSlash: createVectorIcon(Feather, 'eye-off', '#94A3B8'),
  FaCheck: createVectorIcon(Feather, 'check', '#FFFFFF'),
  FaMapMarkerAlt: createVectorIcon(Ionicons, 'location-outline', '#2563EB'),
  FaMapPin: createVectorIcon(Ionicons, 'location-outline', '#2563EB'),
};

const handler = {
  get: function (target, prop) {
    if (prop in target) {
      return target[prop];
    }
    return createVectorIcon(Feather, 'circle', '#2563EB');
  },
};

module.exports = new Proxy(icons, handler);
