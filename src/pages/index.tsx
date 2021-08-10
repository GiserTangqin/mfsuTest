/*
 * @Description: 
 * @Author: tangq(tangq@geoscene.com.cn)
 * @Date: 2021-08-03 15:37:39
 * @LastEdited: tangq(tangq@geoscene.com.cn)
 */
import Map from '@/components/Map'
import '@arcgis/core/assets/esri/themes/light/main.css';

import styles from './index.less';

export default function IndexPage() {
  return (
    <Map className={styles['map-container']} />
  );
}
