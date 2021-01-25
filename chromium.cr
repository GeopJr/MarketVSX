# ["background.js", "marketvsx.js"].each do |file|
#     File.write(file, File.read(file).gsub("browser.", "chrome."))
# end

json = File.read("manifest.json")

["48", "96", "128", "256", "512"].each do |size|
    json = json.gsub("\"#{size}\": \"icons/icon.svg\"", "\"#{size}\": \"icons/icon-#{size}.png\"")
end

File.write("manifest.json", json)
