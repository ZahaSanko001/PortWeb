import './desc.css';

const Desc = () => {
  return (
    <div className="desc">

      <div className='desc-img'>
        <img src="Ryan1.JPG" alt="" />
      </div>

      <div className='desc-name'>
        <p>Hey!, I'm Raiyan</p>

        <div className='Webdev'>
          <h1 className='web'>Web</h1>
          <h1 className='type'>Developer</h1>
        </div>

        <p>
            I'm a Web developer working remotely. I can help you build your dream website that your clients will love!
        </p>

        <div className='desc-btns'>
          <button className='btn1'>Get in Touch</button>
          <button className='btn2'>Browse Projects</button>
        </div>

      </div>

      
    </div>
  );
}

export default Desc;