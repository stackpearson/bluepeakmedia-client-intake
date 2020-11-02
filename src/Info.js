import React from 'react';
import {Button} from 'reactstrap'
import {useHistory} from 'react-router-dom';


const Info = (props) => {

    let history = useHistory();

    const toName = () => {
        history.push('/shoot-details')
    }
    
    return (<>
        <div className='info_container'>
            <h2>These are instructions for your shot list, <span className='bpm_callout_text'>please read them carefully!</span></h2>
            <p>On the following pages, you'll be asked to add a description &amp; an example image for each individual shot you desire for the product in your order. We'll use this list as our sole reference when shooting and editing your images. Please let us know if you need to add any shots, update or add details before booking your shoot. <strong>Remember, if it a shot isn't listed on the following pages, you won't see it in your final images!</strong></p>
            {/* Come back in and add an image of the final form */}

            <h2>Example <span className='bpm_callout_text'>images</span></h2>
            <p>We use example photos to lock in pre-agreed upon arrangements, angles or poses. Specific lighting setup and overall style may differ from example Photos. It's important to select example images or mock-ups that accurately represent the expectations of your final images. Please note that an example image is required if you'd like a specific look to be emulated or matched. We will create arrangements at our own discretion if you're unable to provide an example image.</p>

            <h2>Image <span className='bpm_callout_text'>Appearances</span></h2>
            <p>When an example image is included on this shot list, these appearance options will dictate the level of create freedom available to us during the shoot</p>
            <ul>
                <li><strong>Match Example:</strong> We'll match the appearance of the image as closely as possible</li>
                <li><strong>Similar to Example:</strong> We'll use the example image for inspiration, but may deviate and use our own judgement as needed</li>
                <li><strong>Photogs Choice:</strong> We'll take full creative control and use our best judgement to create an image that is competitive and compelling</li>
            </ul>

            <h2>Avoiding <span className='bpm_callout_text'>Reshoots</span></h2>
            <p>We want to avoid reshoots just as much as you do. However, we are available to reshoot your product free of charge <em>if</em> the images weren't delivered to the expectations in the shot list. If the delivered images align with the agreed upon criteria in the shot list, a re shoot will incur additional costs. 1 round of photoshop corrections is included free of charge with all images. Extensive editing or retouching may incur additional cost depending on the specifics of the situation.</p>

            <h2><span className='bpm_callout_text'>Does everything look correct?</span></h2>
            <p>If everything looks good, let us know and we'll email over your personalized booking link so we can get the ball rolling on your shoot. <strong>Once your payment and contract has been received, you will be added to the next available position within our project queue.</strong> <strong className='bpm_warning_text'>IMPORTANT: Signing of your contract also signifies a sign off of the shotlist.</strong></p>

            <div className='info_button'>
                <Button color='primary' onClick={toName}>Get Started</Button>
            </div>
        </div>
        
        
        </>)
}

export default Info;

