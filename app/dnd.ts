import Html5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';

export let supportsNativeDnd;

export function dndBackend() {
  supportsNativeDnd = !('ontouchstart' in window);

  return supportsNativeDnd ? Html5Backend : TouchBackend;
}
