
const UseValidate = (value) => {

    const error = {}

    if (value.proposal === '0'){
        error.proposal = 'یک مقدار را انتخاب کنید'
    }else delete error.proposal;

    if (value.title === ''){
        error.title = 'عنوان را وارد کنید'
    }else delete error.title;

    if (value.about === ''){
        error.about = 'توضیحات را وارد کنید'
    }else delete error.about;

  return error;
};

export default UseValidate;
