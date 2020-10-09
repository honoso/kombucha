const appID = "1276632006018631";
const clientToken = "530134b34e11b6c4a44edb69fb93381d {delete}";
const url = "https://www.instagram.com/p/CGDdgrxsy--/";
const getURL = `https://graph.facebook.com/v8.0/instagram_oembed?url=${url}&access_token=${appID}|${clientToken}`;

async function getUser() {
    try {
      const response = await axios({
        method: 'get',
        url: getURL,
        fields: 'thumbnail_url',
        access_token: `${appID}|${clientToken}`,
      });
      const picture = response.data.thumbnail_url;
      console.log(picture);
      document.querySelector('.section-instagram__container').innerHTML = `
        <img src="${picture}" alt="Insta Photo 1" class="section-instagram__img">
        <img src="${picture}" alt="Insta Photo 2" class="section-instagram__img">
        <img src="${picture}" alt="Insta Photo 3" class="section-instagram__img">
        <img src="${picture}" alt="Insta Photo 4" class="section-instagram__img">
        <img src="${picture}" alt="Insta Photo 5" class="section-instagram__img">
      `;
    } catch (error) {
      console.error(error);
      document.querySelector('.section-instagram__container').innerHTML = `
        <img src="img/insta-1.jpg" alt="Insta Photo 1" class="section-instagram__img">
        <img src="img/insta-2.jpg" alt="Insta Photo 2" class="section-instagram__img">
        <img src="img/insta-3.jpg" alt="Insta Photo 3" class="section-instagram__img">
        <img src="img/insta-4.jpg" alt="Insta Photo 4" class="section-instagram__img">
        <img src="img/insta-5.jpg" alt="Insta Photo 5" class="section-instagram__img">
      `
    }
}

getUser();
