import React,{Component} from 'react'

class Course extends Component {
    constructor(props){
        super(props);
        this.state  = {
            courses: [],
            course : {
                name: 'product name',
                price: 0
            }
        }
    }


    componentDidMount() {
        this.getCourses();
    }

    getCourses = () => {
        fetch('http://localhost:3000/api/courses')
        .then(response => response.json())
        .then(json =>{
            this.setState({
                courses: json.courses
            })
        });
    }

    addCourse = ()=>{
        fetch('http://localhost:3000/api/courses')
        .then(response => response.json())
        .then(json =>{
            this.setState({
                courses: json.courses
            })
        });
    }
    renderCourse = ({courseId , courseName}) =><div className ={courseId}>{courseName}</div>
    render() {
        const {courses ,course} = this.state;
        console.log(courses);
            return (
                <div className="Course">
                  {courses.map(this.renderCourse)}

                    <div>
                        <input value ={course.name}
                        onChange= { e=> this.setState({course:{...course,name:e.target.value}}) }></input>
                        <input value ={course.price}
                        onChange = {e=>this.setState({course:{...course ,price:e.target.value}})}></input>                        
                        <button onClick ={this.addCourse}>Add course</button>
                    </div>
               </div>
           );    

    } 
  }

export default Course;