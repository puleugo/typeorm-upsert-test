# Introduction
This is a simple example of how to Reproduce the mysql upsert error.

# Steps to reproduce
1. Clone the repository
```bash
git clone https://github.com/puleugo/typeorm-upsert-test.git
```

2. Install Dependencies
```bash
cd typeorm-upsert-test
npm install
```

4. Setup Node Version
```bash
nvm use
```

3. Run Databases
```bash
docker-compose up -d
```

4. Run the script(Run Twice for remove Persistence)
```bash
npm run start
```
