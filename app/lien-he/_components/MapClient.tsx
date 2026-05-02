'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import type { DivIcon } from 'leaflet';
import styles from './MapClient.module.css';

/* Coordinates — 12/6 Đường 58, Khu phố 12, P. Phước Long A, TP. Thủ Đức */
const HCM_POSITION: [number, number] = [10.8062, 106.7742];

/* Google Maps link for the actual office address */
const STREET_VIEW_URL =
  'https://www.google.com/maps/search/12%2F6+%C4%90%C6%B0%E1%BB%9Dng+58+Ph%C6%B0%E1%BB%9Bc+Long+A+Th%E1%BB%A7+%C4%90%E1%BB%A9c+H%E1%BB%93+Ch%C3%AD+Minh/@10.8062,106.7742,16z';

function createCustomIcon(): DivIcon | null {
  if (typeof window === 'undefined') return null;
  // Dynamic import avoids SSR issues with leaflet
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const L = require('leaflet') as typeof import('leaflet');
  return L.divIcon({
    html: `<div class="${styles.markerPin}">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    </div>`,
    className: '',
    iconSize: [36, 44],
    iconAnchor: [18, 44],
    popupAnchor: [0, -44],
  });
}

function MapResizeSync() {
  const map = useMap();

  useEffect(() => {
    const syncSize = () => map.invalidateSize();
    const rafId = window.requestAnimationFrame(syncSize);
    const timeoutId = window.setTimeout(syncSize, 180);
    window.addEventListener('resize', syncSize);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
      window.removeEventListener('resize', syncSize);
    };
  }, [map]);

  return null;
}

export default function MapClient() {
  useEffect(() => {
    /* Fix leaflet default icon paths broken by webpack */
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const L = require('leaflet') as typeof import('leaflet');
    // @ts-expect-error — _getIconUrl is an internal method
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
  }, []);

  const icon = createCustomIcon();

  return (
    <div className={styles.mapWrapper}>
      <MapContainer
        center={HCM_POSITION}
        zoom={16}
        scrollWheelZoom={false}
        className={styles.map}
        aria-label="Bản đồ vị trí văn phòng HỌC GIA"
      >
        <MapResizeSync />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          className={styles.tiles}
        />
        {icon && (
          <Marker position={HCM_POSITION} icon={icon}>
            <Popup className={styles.popup}>
              <strong>HỌC GIA — Văn phòng HCM</strong>
              <br />
              12/6 Đường 58, P. Phước Long A, TP. Thủ Đức
              <br />
              <a
                href={STREET_VIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.streetViewLink}
              >
                Xem thực tế →
              </a>
            </Popup>
          </Marker>
        )}
      </MapContainer>

      <a
        href={STREET_VIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.streetViewBtn}
        aria-label="Xem đường phố thực tế trên Google Maps"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        Xem thực tế
      </a>
    </div>
  );
}
