'use client';

interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
    return(
        <div className={ center ? 'text-center' : 'text-satrt'}>
            <div className="text-2 font-bold">
                { title }
            </div>

            <div className="font-light text-neutral-500 mt-2">
                { subtitle }
            </div>
        </div>  
    )
}

export default Heading;