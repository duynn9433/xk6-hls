import m3u8 from 'k6/x/m3u8';

export const options = {
  vus: 1,
  duration: '10s',
};

m3u8.set("https://es1-p1-netcdn.netcdn.vn/netcdn-live/198/output/198-audio_133600_eng=131600-video=6730000.m3u8?timestamp=1817589485&uid=12345&token=30491843fe3339a5c4147dee605e091e");
export default function () {
  m3u8.record()
}
