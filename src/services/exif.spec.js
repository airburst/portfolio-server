/* eslint-env jest */
import getExifData from './exif';

describe('Exif Data', () => {
  it('is extracted from an image file', async () => {
    const { exif, error } = await getExifData('Ella-and-Fia.jpg');

    expect(exif).toMatchObject({
      width: 4248,
      height: 2832,
      exposure: 0.0025,
      shutter: 8.643856,
      aperture: 2.8,
      iso: 200,
      focalLength: 200,
      dateTaken: '2018:08:19 15:24:42',
    });
    expect(error).toBe(null);
  });

  it('returns an error when no exif info is present', async () => {
    const { exif, error } = await getExifData('mac.jpg');

    expect(exif).toBe(null);
    expect(error).toBe('No Exif segment found in the given image.');
  });
});
