import natural from 'natural'
import { Response, Request } from 'express';

const tokenizer = new natural.WordTokenizer();

export const countWords = function (fileString: string) {
  const wordIndex = {};
  //   fileString = fileString.toLowerCase();
  //   const wordsArray = [];
  const bookData = tokenizer.tokenize(fileString.toLowerCase());
  bookData.forEach((word) => {
    if (!(wordIndex.hasOwnProperty(word))) {
      wordIndex[word] = 0;
    //   wordsArray.push(word);
    }
    wordIndex[word] += 1;
  });
  //   const resObject = {
  //     wordIndex,
  //     wordsArray,
  //   };
  return wordIndex;
};

export const countFirstNames = function (nameString: string, bookData: object) {
  const firstNameTokens = tokenizer.tokenize(nameString);
  const wordKeys = Object.keys(bookData);

  const firstNameCountObj = {};
  const arrayOfObjFirstnames = [];
  firstNameTokens.forEach((x) => {
    if (wordKeys.includes(x)) {
    // console.log(bookData[x]);
      firstNameCountObj[x] = bookData[x];
      arrayOfObjFirstnames.push({
        name: x,
        count: bookData[x],
      });
    } else {
      firstNameCountObj[x] = 0;
      arrayOfObjFirstnames.push({
        name: x,
        count: 0,
      });
    }
  });
  return { firstNameCountObj, arrayOfObjFirstnames };
};

export const successResponse = (req:Request, res:Response, data:object, code:number = 200) => res.send({
  code,
  data,
  success: true,
});

export const errorResponse = (
  req:object,
  res:Response,
  errorMessage:string = 'Something went wrong',
  code:number = 500,
  error:object = {},
) => res.status(500).json({
  code,
  errorMessage,
  error,
  data: null,
  success: false,
});
