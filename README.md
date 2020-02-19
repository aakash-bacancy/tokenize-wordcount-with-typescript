# tokenize-wordcount-with-typescript

## Getting Started
You can download this repo or clone using below command. (folder-name will be project folder in which you want to start your project).
```
git clone https://github.com/aakash-bacancy/tokenize-wordcount-with-typescript.git <folder-name>
```
or from **Download Zip**
```
https://github.com/aakash-bacancy/tokenize-wordcount-with-typescript.git 
```

### Installing
```
> npm install (this will install all dependent libraries)
```

`npm start` to run your project 

### Word count API
```
> POST : http:localhost:3000/uploadbook  
> Payload: name(upload a file containing text data)
> Response : 
{
    "code": 200,
    "data": {
        "the": 9806,
        "project": 87,
        "gutenberg": 93,
        "ebook": 11,
        "of": 3996,
        "oliver": 881,
        "twist": 68,
        "by": 805,
        "charles": 10,
        "dickens": 4,
        "this": 852,
        "is": 758,
        "for": 1183,
        ..
        ..
        },
        "token": "secret token"
    },
    "success": true
}
```
