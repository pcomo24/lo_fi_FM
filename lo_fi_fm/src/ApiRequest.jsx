import React from 'react';
//pass in 'search' for fx
//create an array that has each filter option that gets passed in i.e. '&maxResults=25&type=channel'
//create another array for part=snippet parts
const ApiRequest = (fx, query) => {
  let Url = 'https://www.googleapis.com/youtube/v3/search?';
  let fx = fx + '?';
  let key = 'key=AIzaSyDfq9MeRdasqu6lRrKzP_be-HxdXejiICE';
  let q = query;
  let part = '&part=snippet';
}
