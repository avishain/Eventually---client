import { useEffect } from 'react';

const useScript = url => {
    useEffect(() => {
        // const script = document.createElement('script');

        // script.src = url;
        // script.async = true;

        // document.body.appendChild(script);

        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.innerHTML = "var myWidget = cloudinary.createUploadWidget({cloudName: 'dextz7jfo'," +
            "uploadPreset: 'c60xooc0'" +
            "}, (error, result) => {" +
            'if (!error && result && result.event === "success") {' +
            "console.log('Done! Here is the image info: ', result.info);}});" +
            'document.getElementById("upload_widget").addEventListener("click", function () {' +
            'myWidget.open();' +
            '}, false);';
        document.getElementById("test").appendChild(s);
        // return () => {
        //     document.body.removeChild(script);
        // }

    }, [url]);
};

export default useScript;