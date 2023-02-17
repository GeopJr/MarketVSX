<p align="center">
  <img alt="branding" src="https://i.imgur.com/JFh156k.png">
</p>
<h1 align="center">MarketVSX</h1>
<h4 align="center">A bridge between vscode marketplace and open-vsx</h4>
<p align="center">
  <br />
    <a href="https://github.com/GeopJr/MarketVSX/blob/main/CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/Contributor%20Covenant-v2.1-ff69b4.svg?style=for-the-badge&labelColor=f8eae3" alt="COC" /></a>
    <a href="https://github.com/GeopJr/MarketVSX/blob/main/LICENSE"><img src="https://img.shields.io/badge/LICENSE-BSD--2--CLAUSE-000000.svg?style=for-the-badge&labelColor=f8eae3" alt="AGPL-3.0" /></a>
</p>
<p align="center">
  <br />
    <a href="https://addons.mozilla.org/en-US/firefox/addon/marketvsx/"><img src="https://i.imgur.com/UkbNoME.png" alt="firefox addon" /></a>
    <a href="https://chrome.google.com/webstore/detail/marketvsx/fcoiikfhfempfajefakhkjlkmloihmlp"><img src="https://i.imgur.com/TSTwptM.png" alt="chromium addon" /></a>
</p>

# 

## What does this extension do?

This extension adds a button next to an extension on https://marketplace.visualstudio.com/ that will either send the user to open-vsx, if the extension is available there, or download its .vsix file.

#

## Thinking ahead

One important thing this extension ensures is that it will keep on working even if they decide to change all ID and class names.
There are 3 possible locations for the button:
- Next to the extension name
- Below the extension image
- Floating at the top of body

The order of them is based on how unique their ID/Classes are. The default location is the first, if that's not available, it will move to the second and the third acts as a catch-all.

Another important thing is when the extension is *not* available on open-vsx, the button will download the .vsix file. However it "clicks" the already available button on the site. If that's not available though, it will manually create the direct link.
> Note: the direct link will be missing the .vsix extension at the end. Users need to add it themselves.

#

## Screenshots

<p align="center">
    <img alt="screenshot" width="600" src="https://i.imgur.com/JwqqVNQ.png"><br />
    <img alt="screenshot" width="600" src="https://i.imgur.com/ygktdG1.png">
</p>

#
