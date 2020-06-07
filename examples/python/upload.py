import requests
import magic


# Before running install it with pip install -r requirements.txt (requirements.txt should be in the same directory)
filename = "path/to/file.png"
api_key = "your_api_key"

# For automatic mime type detection
mime = magic.Magic(mime=True)
mimetype = mime.from_file(filename)

# Uploading the file.
files = {'file': (filename, open(filename,'rb'), mimetype)}
r = requests.post(url="https://file.coffee/api/v1/upload?api=" + api_key, files=files)
print(r.json())
