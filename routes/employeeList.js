const router = require('express').Router();

const employeeList =[

    {
        name:" Malcolm X ",
        jobTitle:" Ceo ",
        employeeID: 'ES5001',
        image:"images/images.jpeg",
    },
    {
        name:" Malcom Anaba ",
        jobTitle:" Productions Manager ",
        employeeID: 'ES5002',
        image:"images/image3.png",
    },
    {
        name:" Fred Awotwe",
        jobTitle:" Sales Manager ",
        employeeID: 'ES5003',
        image:"images/image2.jpg",
    },
    
    {
        name:" Deodat Adomako ",
        jobTitle:" Accountant ",
        employeeID: 'ES5004',
        image:" images/image4.jpg ",
    }
]

router.get('/',(req,res)=>{
    res.render('home',{employeeList,title:'Home'})
});


module.exports = router;