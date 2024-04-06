

/* User's state array */
export var userState = [
    { id: 1, name: "Gujarat" },
    { id: 2, name: "Rajasthan" },
    { id: 3, name: "UP" },
    { id: 4, name: "Delhi" },
    { id: 5, name: "Maharastra" },
]

/* User's city array */
export var userCity = [
    { parentId: 1, id: 1, name: "Surat" },
    { parentId: 1, id: 2, name: "valsad" },
    { parentId: 2, id: 3, name: "kota" },
    { parentId: 3, id: 4, name: "dongi" },
    { parentId: 4, id: 5, name: "xyz" },
    { parentId: 4, id: 6, name: "yzu" },
    { parentId: 5, id: 7, name: "Mumbai" },
    { parentId: 5, id: 8, name: "Andheri" }
]


/* get state name by Id */
export  function getStateName(id: any) {
    if (id) {
        return userState.filter((item) => item.id == id)[0].name;
    }
}

/* get city name by Id */
export  function getCityName(id: any) {
    if (id) {
        return userCity.filter((item) => item.id == id)[0].name;
    }
}


export const getData = (e: any,setData:any,formData:any) => {
    const { name, value, checked } = e.target;

    if (name == "hobbies") {
        // setskill([...skill,value]);
        const newHobbies: any = [...formData.hobbies];
        if (checked) {

            newHobbies.push(value);
        } else {
            const index = newHobbies.indexOf(value);
            if (index != -1) {
                newHobbies.splice(index, 1);
            }
        }
        setData({ ...formData, [name]: newHobbies })
    } else if (name == "date") {
        const newDate = new Date(value);
        const now = new Date();

        const curY = now.getFullYear();
        const userY = newDate.getFullYear();
        const diff = curY - userY;
        var set = diff <= 20 ? 0 : diff;
        setData((prev: any) => {
            return { ...prev, ['date']: value }
        })
        setData((prev: any) => {
            return { ...prev, ['age']: set }
        })
    }
    else {
        setData({ ...formData, [name]: value })

    }
}


 /* Logic to filter city by corresponding state name and setting into cityUsestate and also inserting state into formData*/
export const handleState = (e: any,setData:any,tempCity:any,setCity:any,formData:any) => {
    const { name, value } = e.target
    setData({ ...formData, [name]: value });
    const matchedCity = userCity.filter((item) => item.parentId == value);
    tempCity.push(...matchedCity);
    setCity(tempCity);
}

/* Handling input type = radio and setting into form useState */
export const handleRadio = (e: any,setData:any,formData:any) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData({ ...formData, [name]: value })
}


/* setting selected city into formData */
export const handlerCity = (e: any,setData:any,formData:any) => {
    const { name, value } = e.target;
    console.log("city handler" + name, value);
    setData({ ...formData, [name]: value });
}


/* Reset button functionality */
export const handleReset = (setError:any,setCity:any,setData:any) => {
    setError({});
    setCity([]);
    setData({
        name: "",
        email: "",
        date: new Date,
        age: 0,
        gender: "",
        status: "",
        state: "",
        city: "",
        hobbies: []
    })
}


    /* Edit button click event and pasting all value into given form */
    var updateId: any;
 export const editItem = (e: any,key_id:any,setFlag:any,setData:any,finalFormData:any,navigate:any) => {
    
        setFlag(1);
        const { id } = e.target;
        updateId = id;
        console.log(id);
        const extractedData = finalFormData.find((item: any, key: any) => key == id)
        console.log("Extracted", extractedData);
        setData(extractedData);
        navigate(`/EmpManager/EmpUpdate/${key_id}`);
    }

    /* Delete button functionality *Delete User by Id */
    export const deleteItem = (e: any,key:any,finalFormData:any,setfinalFormData:any) => {
        const { id } = e.target;
        console.log(id);
        finalFormData.splice(id, 1);
        setfinalFormData([...finalFormData])
    }
