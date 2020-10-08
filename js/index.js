const url = "https://graph.facebook.com/v8.0/instagram_oembed?url=https://www.instagram.com/p/CFkwKJzsXPE/&fields=thumbnail_url&access_token=1276632006018631|530134b34e11b6c4a44edb69fb93381d";

async function getUser() {
    try {
      const response = await axios.get(url);
      const picture = response.data.thumbnail_url;
      console.log(picture);
      document.querySelector('.insta-container__img').src = picture
    } catch (error) {
      console.error(error);
    }
}

const img = getUser();
