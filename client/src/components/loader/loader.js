import './loader.css';

export default function Loader() {
    return (
        <div>
            <div className='overlay'></div>
            <div style={{position: 'fixed', top: '50%', left: '50%', marginTop: '-50px',marginLeft:'-100px'}} className='w-1/2 text-center bg-white border border-gray-400'>
                <div className='lds-roller'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div style={{color:'white', fontSize:'30px', fontWeight:'bold', marginTop:'50px',position: 'fixed', top: '50%', left: '50%',marginLeft:'-125px'}}>LOADING</div>
            </div>
        </div>
    );
}