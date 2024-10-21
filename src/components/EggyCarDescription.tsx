import React from 'react';

const EggyCarDescription: React.FC = () => {
    return (
        <div className="w-3/4 mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-yellow-600">Eggy Car</h2>
            <p className="mb-6">
                Welcome to Eggy Car, a fun and challenging game where you drive a car made entirely of eggs! Get ready for an egg-citing adventure as you navigate through obstacle-filled courses and collect eggs along the way.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-yellow-600">What We Offer</h2>
            <p className="mb-6">
                Eggy Car offers a unique and quirky gaming experience that is fun for all ages. With its simple yet addictive gameplay and charming graphics, Eggy Car is sure to crack you up!
            </p>

            <h2 className="text-2xl font-bold mb-4 text-yellow-600">Gameplay</h2>
            <p className="mb-4">
                In Eggy Car, your goal is to drive your egg car as far as possible without cracking it. Navigate through a variety of challenging levels filled with ramps, loops, and obstacles while collecting eggs scattered throughout the course.
            </p>

            <p className="mb-4 font-semibold">Controls:</p>
            <ul className="list-disc list-inside mb-6 pl-4">
                <li>Use the arrow keys or WASD to accelerate, brake, and steer your egg car.</li>
                <li>Avoid collisions with obstacles to prevent your egg car from cracking.</li>
                <li>Collect as many eggs as you can to earn points and unlock new levels and vehicles.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-yellow-600">Features</h2>
            <ul className="list-disc list-inside mb-6 pl-4">
                <li>Multiple levels with increasing difficulty</li>
                <li>Unlockable vehicles made of different types of eggs</li>
                <li>Leaderboards to compete with friends and other players</li>
                <li>Simple and intuitive controls suitable for players of all skill levels</li>
                <li>Endless replayability with randomly generated levels</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-yellow-600">
                What is the Eggy Car game?
            </h2>
            <p className="mb-4">
                Eggy Car is a fun physics-based driving game in which you must transport a fragile egg as far as possible across a bumpy road using a car. The challenge lies in carefully controlling the speed and balance of your car to prevent the egg from falling off and cracking as you navigate hills and slopes. Collect coins to upgrade your car, as well as power-ups to help you along the journey. The further you go, the higher your score, making it a fun and challenging game.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-yellow-600">How to Play</h2>
            <ul className="list-disc list-inside mb-6 pl-4">
                <li>Left or D to accelerate forward</li>
                <li>Right or A to accelerate backward</li>
            </ul>


            <p className="font-semibold text-lg text-center text-yellow-600">
                Get cracking and see how far you can drive in Eggy Car!
            </p>
        </div>
    );
};

export default EggyCarDescription;
