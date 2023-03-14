import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (<div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>);

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an importante agreement for you to accept
        </p>

    </Modal>

    return(
        <div>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            
            {showModal && modal}
            
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ultrices mi. Pellentesque a pulvinar leo, id pharetra quam. Curabitur tempor sit amet dolor at porttitor. Curabitur nulla urna, consectetur vel placerat ac, interdum eu mauris. Suspendisse efficitur mi ac ante commodo, sed porttitor erat semper. Vivamus nulla mauris, pretium at elit id, ornare convallis ligula. Maecenas tristique placerat vehicula. Praesent augue diam, rhoncus eu auctor quis, gravida eu nisi. In hac habitasse platea dictumst.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ultrices mi. Pellentesque a pulvinar leo, id pharetra quam. Curabitur tempor sit amet dolor at porttitor. Curabitur nulla urna, consectetur vel placerat ac, interdum eu mauris. Suspendisse efficitur mi ac ante commodo, sed porttitor erat semper. Vivamus nulla mauris, pretium at elit id, ornare convallis ligula. Maecenas tristique placerat vehicula. Praesent augue diam, rhoncus eu auctor quis, gravida eu nisi. In hac habitasse platea dictumst.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ultrices mi. Pellentesque a pulvinar leo, id pharetra quam. Curabitur tempor sit amet dolor at porttitor. Curabitur nulla urna, consectetur vel placerat ac, interdum eu mauris. Suspendisse efficitur mi ac ante commodo, sed porttitor erat semper. Vivamus nulla mauris, pretium at elit id, ornare convallis ligula. Maecenas tristique placerat vehicula. Praesent augue diam, rhoncus eu auctor quis, gravida eu nisi. In hac habitasse platea dictumst.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ultrices mi. Pellentesque a pulvinar leo, id pharetra quam. Curabitur tempor sit amet dolor at porttitor. Curabitur nulla urna, consectetur vel placerat ac, interdum eu mauris. Suspendisse efficitur mi ac ante commodo, sed porttitor erat semper. Vivamus nulla mauris, pretium at elit id, ornare convallis ligula. Maecenas tristique placerat vehicula. Praesent augue diam, rhoncus eu auctor quis, gravida eu nisi. In hac habitasse platea dictumst.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ultrices mi. Pellentesque a pulvinar leo, id pharetra quam. Curabitur tempor sit amet dolor at porttitor. Curabitur nulla urna, consectetur vel placerat ac, interdum eu mauris. Suspendisse efficitur mi ac ante commodo, sed porttitor erat semper. Vivamus nulla mauris, pretium at elit id, ornare convallis ligula. Maecenas tristique placerat vehicula. Praesent augue diam, rhoncus eu auctor quis, gravida eu nisi. In hac habitasse platea dictumst.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ultrices mi. Pellentesque a pulvinar leo, id pharetra quam. Curabitur tempor sit amet dolor at porttitor. Curabitur nulla urna, consectetur vel placerat ac, interdum eu mauris. Suspendisse efficitur mi ac ante commodo, sed porttitor erat semper. Vivamus nulla mauris, pretium at elit id, ornare convallis ligula. Maecenas tristique placerat vehicula. Praesent augue diam, rhoncus eu auctor quis, gravida eu nisi. In hac habitasse platea dictumst.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ultrices mi. Pellentesque a pulvinar leo, id pharetra quam. Curabitur tempor sit amet dolor at porttitor. Curabitur nulla urna, consectetur vel placerat ac, interdum eu mauris. Suspendisse efficitur mi ac ante commodo, sed porttitor erat semper. Vivamus nulla mauris, pretium at elit id, ornare convallis ligula. Maecenas tristique placerat vehicula. Praesent augue diam, rhoncus eu auctor quis, gravida eu nisi. In hac habitasse platea dictumst.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ultrices mi. Pellentesque a pulvinar leo, id pharetra quam. Curabitur tempor sit amet dolor at porttitor. Curabitur nulla urna, consectetur vel placerat ac, interdum eu mauris. Suspendisse efficitur mi ac ante commodo, sed porttitor erat semper. Vivamus nulla mauris, pretium at elit id, ornare convallis ligula. Maecenas tristique placerat vehicula. Praesent augue diam, rhoncus eu auctor quis, gravida eu nisi. In hac habitasse platea dictumst.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ultrices mi. Pellentesque a pulvinar leo, id pharetra quam. Curabitur tempor sit amet dolor at porttitor. Curabitur nulla urna, consectetur vel placerat ac, interdum eu mauris. Suspendisse efficitur mi ac ante commodo, sed porttitor erat semper. Vivamus nulla mauris, pretium at elit id, ornare convallis ligula. Maecenas tristique placerat vehicula. Praesent augue diam, rhoncus eu auctor quis, gravida eu nisi. In hac habitasse platea dictumst.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ultrices mi. Pellentesque a pulvinar leo, id pharetra quam. Curabitur tempor sit amet dolor at porttitor. Curabitur nulla urna, consectetur vel placerat ac, interdum eu mauris. Suspendisse efficitur mi ac ante commodo, sed porttitor erat semper. Vivamus nulla mauris, pretium at elit id, ornare convallis ligula. Maecenas tristique placerat vehicula. Praesent augue diam, rhoncus eu auctor quis, gravida eu nisi. In hac habitasse platea dictumst.
            </p>
        </div>
    )
}

export default ModalPage;