var Singleton = function () {
    if (Singleton.__instance) {
        return Singleton.__instance;
    }

    Singleton.__instance = this;
};

//https://www.codewars.com/kata/534fcca5edb124cfe6000f60