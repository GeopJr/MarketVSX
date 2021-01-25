const browserApi = window.chrome ? window.chrome : browser;

const params = new URLSearchParams(window.location.search.toLowerCase())
const packageID = params.get("itemname")
if (packageID) {
  const [author, package] = packageID.split(".")
  const openvsxurl = `https://open-vsx.org/api/${author}/${package}`

  const randomID =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)

  // Button style
  const style =
    "font-size:20px;background-color:#107c10;color:#FFFFFF;min-width:120px;border:1px solid #666666;position:relative;font-family:'Segoe UI','Segoe UI Web (West European)','Segoe UI',-apple-system,BlinkMacSystemFont,Roboto,'Helvetica Neue',sans-serif;font-weight: 400;box-sizing:border-box;display:inline-block;text-align:center;cursor:pointer;vertical-align:top;padding-top:0px;padding-right:16px;padding-bottom:0px;padding-left:16px;height:32px;user-select:none;outline:transparent;text-decoration:none;border-radius:0px;"
  const button = `<a id="${randomID}" target="_blank" rel="noopener noreferrer" style="${style}">Loading...</a>`

  // The button can be placed in 3 different places
  // Main reason for this is M$ changing class names etc.
  // The last else will always work as its a fixed button at the top
  let container = document.getElementsByClassName("item-header-content light")
  if (container.length > 0) {
    container[0].innerHTML = container[0].innerHTML.replace(
      "</h1>",
      "</h1>" + button
    )
  } else {
    container = document.querySelectorAll('[role="presentation"]')
    if (container.length > 0) {
      container[0].innerHTML += button
    } else {
      document.body.innerHTML =
        button.replace(
          "position:relative",
          "position:fixed;width:100%;z-index:5000;"
        ) + document.body.innerHTML
    }
  }

  browserApi.runtime.sendMessage({ url: openvsxurl })

  browserApi.runtime.onMessage.addListener((request) => {
    if (request.exists) {
      document.getElementById(`${randomID}`).innerHTML = "open-vsx"
      document.getElementById(`${randomID}`).href = openvsxurl.replace(
        "api",
        "extension"
      )
    } else {
      document.addEventListener("readystatechange", (event) => {
        if (event.target.readyState === "complete" && document.getElementById(`${randomID}`).innerHTML !== "open-vsx") {
          const downloadButton = document.querySelectorAll('[aria-label="Download Extension"]');
          console.log(downloadButton)
          if (downloadButton.length > 0) {
            document.getElementById(`${randomID}`).href = "#";
            document.getElementById(`${randomID}`).target = "_self";
            document.getElementById(`${randomID}`).onclick = function() { document.querySelectorAll('[aria-label="Download Extension"]')[0].click() }
          } else {
            let version
            const versionTag = document.querySelectorAll(
              '[aria-labelledby="version"]'
            )
            if (versionTag.length > 0) {
              version = versionTag[0].innerHTML
            }

            const directLink = version
              ? `https://${author}.gallery.vsassets.io/_apis/public/gallery/publisher/${author}/extension/${package}/${version}/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage`
              : ""
            document.getElementById(`${randomID}`).href = directLink
          }
          document.getElementById(`${randomID}`).innerHTML = ".vsix"
        }
      })
    }
    return Promise.resolve({ response: "Thanks!" })
  })
}
