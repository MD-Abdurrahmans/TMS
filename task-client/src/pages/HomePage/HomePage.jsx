import Banner from "./components/Banner/Banner";
import WhatDo from "./components/whatDo/WhatDo";


const HomePage = () => {
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>

            <WhatDo></WhatDo>
        </div>
    );
};

export default HomePage;