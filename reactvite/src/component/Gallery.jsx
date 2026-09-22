import Icard from './ICard'

function Gallery() {
    const student ={
        pic:"../images/studentimage.jpg",
        name:"  Rahul Kumar",
        roll:"123456",
        branch:"CSE",
        college:"Abes engineering college"
    }
  return (
    <div style ={{border:'2px solid red', display:'flex', flexDirection:'row', justifyContent:'space-around', padding:'20px', gap:'20px'}}>
     <Icard name = {student.name}  roll = {student.roll} branch = {student.branch} college = {student.college}/>
     <Icard name = "Abhi Kumar"  roll = "1909456" branch = "CSE" college = "Abes engineering college"/> 
     <Icard name = "Priya Singh"  roll = "123789" branch = "CSE" college = "Abes engineering college"/>
     <Icard name = "Vikas Patel"  roll = "123654" branch = "CSE" college = "Abes engineering college"/>
     </div>
    )
}

export default Gallery
