
## 
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://github.com/ranggadarmajati/merged-interval-time?tab=GPL-3.0-1-ov-file)



# Merged Interval Time

This project is used to find out the merge time of a pull request created based on the pull request number.


## Installation

Clone the project

```bash
  git clone https://github.com/ranggadarmajati/merged-interval-time.git
```

Go to the project directory

```bash
  cd merged-interval-time
```

Install dependencies

```bash
  npm install
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`GITHUB_ACCESS_TOKEN="your_github_access_token"`

`GITHUB_REPOSITORY="your_repository" #e.g: ranggadarmajati/react-native-geocoder-osm`


## Usage/Examples
Using terminal for exec the script:
```bash
  % node script.js 603
  Pull Request: https://github.com/ranggadarmajati/react-native-geocoder-osm/pull/603
  Created At: 2020-03-07T07:06:59Z
  Merged At: 2020-03-09T07:01:34Z
  Interval Time: 47:54:35
```

#### Note:
- 603 is Pull Request Number


## Contributing

Contributions are always welcome!


## License

[GPL](https://github.com/ranggadarmajati/merged-interval-time?tab=GPL-3.0-1-ov-file)

