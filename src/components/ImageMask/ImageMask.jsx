import clsx from "clsx";
import "./ImageMask.scss";

function ImageMask({ imageProps, className, height }) {
    return (
        <div className={clsx("image-mask", className)} style={{ height }}>
            <img className="image-mask__image" {...imageProps} />
        </div>
    );
}
export default ImageMask;
