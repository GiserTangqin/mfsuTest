import React, { useRef, useEffect } from 'react';
import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

export interface Map {
  /** className值 */
  className?: string | undefined;
  /** style值 */
  style?: React.CSSProperties | undefined;
  /**
   * Map属性值
   *
   * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#properties-summary)
   */
  mapProperties?: __esri.MapProperties;
  /**
   * MapView属性值
   *
   * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#properties-summary)
   */
  viewProperties?: __esri.MapViewProperties;
  /** 加载成功回调 */
  onLoad?: (map: __esri.Map, view: __esri.MapView) => void;
  /** 加载失败回调 */
  onFail?: (error: __esri.Error) => void;
}

function Map(props: Map) {
  const { className, style, mapProperties, viewProperties, onLoad, onFail } =
    props;
  const mapDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapDiv.current) {
      const map = new ArcGISMap({
        basemap: 'satellite',
        ...mapProperties,
      });
      const view = new MapView({
        ...viewProperties,
        map,
        container: mapDiv.current,
      });
      view.when(
        () => {
          if (onLoad && typeof onLoad === 'function') {
            onLoad(map, view);
          }
        },
        (error: __esri.Error) => {
          if (onFail && typeof onFail === 'function') {
            onFail(error);
          }
        },
      );
    }
  }, [mapProperties, onFail, onLoad, viewProperties]);

  return <div className={className} style={style} ref={mapDiv}></div>;
}

export default Map;
