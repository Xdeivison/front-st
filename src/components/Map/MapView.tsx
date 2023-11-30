import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';

// Substitua pelo seu token de acesso Mapbox real
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VhcmFuYW5ldCIsImEiOiJjbHBqcjBoOW8wMmh1MmpwYWVnOWR2ZXd1In0.FH6pnjK39mBcJbwvGBqlfg';

interface Station {
  name_institute: string;
  name_county: string;
  name: string;
  longitude: string;
  latitude: string;
}

function MapView() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [longitude] = useState(-40.3381);
  const [latitude] = useState(-20.3222);
  const [zoom] = useState(11.15);

  useEffect(() => {
    if (mapContainer.current) { // Esta verificação garante que o ref está anexado
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [longitude, latitude],
        zoom: zoom,
      });

      map.on('load', async () => {
        try {
          const response = await axios.get('https://200.137.78.170/api/v1/stations');
          const stations: Station[] = response.data.data;

          stations.forEach(station => {
            // Cria um ID único para cada estação
            const sourceId = `source-${station.name}`;
            const layerId = `layer-${station.name}`;

            // Adiciona a fonte e a camada ao mapa
            if (!map.getSource(sourceId)) {
              map.addSource(sourceId, {
                type: 'geojson',
                data: {
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [parseFloat(station.longitude), parseFloat(station.latitude)],
                  },
                  properties: {
                    description: `${station.name_county} - ${station.name}`,
                  },
                },
              });
            }

            if (!map.getLayer(layerId)) {
              map.addLayer({
                id: layerId,
                type: 'circle',
                source: sourceId,
                paint: {
                  'circle-color': '#F78C45',
                  'circle-radius': 6,
                  'circle-stroke-width': 2,
                  'circle-stroke-color': '#FFFFFF',
                },
              });
            }
          });
        } catch (error) {
          console.error('Error fetching the stations data', error);
        }
      });

      // Cleanup on unmount
      return () => map.remove();
    }
  }, [longitude, latitude, zoom]);

  return <div ref={mapContainer} className="map-container" style={{ height: '100vh', width: '100%' }} />;
}

export default MapView;
