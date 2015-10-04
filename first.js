<script>window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));</script>

<script src="https://api.twitter.com/1.1/users/lookup.json"></script>


OAuth realm="<name of realm, e.g. Twitter API>",
oauth_consumer_key="<your app key, you'll know this already from your twitter app>",
oauth_nonce="<this is basically a random alphanumeric string which your app should generate>",
oauth_timestamp="<number of seconds since 1/1/1970 00:00:00",
oauth_signature_method="HMAC-SHA1",
oauth_version="1.0",
oauth_signature="<this is the trickiest part, you basically have to hash the request + two secret params through a signing algorithm using the signature method above>"
