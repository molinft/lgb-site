# Let's Go Brandon Site

## Linux Setup

Install Node 16 LTS

```sh
sudo apt update
sudo apt upgrade -y

curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs
```


## Running

Download the dependencies and start the site

```
npm i
npm run dev
```

Run `npm run lint` before commiting. Add ESLint addons for a better experience.
