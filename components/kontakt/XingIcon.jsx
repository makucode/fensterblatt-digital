function XingIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={32}
            height={32}
            viewBox="0 0 32 32"
        >
            <image
                id="NoPath"
                width={32}
                height={32}
                xlinkHref="data:image/png;base64,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"
            />
        </svg>
    );
}

export default XingIcon;
