import profile from './../../assets/img/replicate-prediction-7kkn2ycxdnas5dsqvwajyf7pja-01-removebg-preview-removebg-preview.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-12 my-24 items-center justify-center md:justify-start">
                <div className="bg-indigo-600 pt-8 w-2/3 rounded-3xl overflow-hidden hidden md:block">
                    <img className='rounded-2xl' src={profile} alt="" />
                </div>
                <div className="text-slate-200 ">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate autem alias animi iste esse ipsam magni qui at tempora vel voluptatem sint hic accusantium quasi, officiis vitae ducimus modi, ut reprehenderit neque, aut voluptate? Cum fugit ex maiores, earum ipsum facere odit maxime. Corporis veniam laudantium iste illo natus sunt?</p>
                    <div className="flex justify-between my-8">
                        <div className="text-center">
                            <h2 className='text-2xl text-indigo-600 font-bold mb-2'>01+</h2>
                            <p className='font-semibold'>Partunal <br /> Project</p>
                        </div>
                        <div className="text-center">
                            <h2 className='text-2xl text-indigo-600 font-bold mb-2'>01+</h2>
                            <p className='font-semibold'>Partunal <br /> Project</p>
                        </div>
                        <div className="text-center">
                            <h2 className='text-2xl text-indigo-600 font-bold mb-2'>01+</h2>
                            <p className='font-semibold'>Partunal <br /> Project</p>
                        </div>
                        
                    </div>
                    <button className='text-white px-4 py-2 rounded-lg bg-indigo-600 font-semibold'>Contact Me</button>
                </div>
            </div>
        </div>
    );
};

export default About;