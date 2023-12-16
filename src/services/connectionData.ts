/* eslint-disable @typescript-eslint/no-explicit-any */
export const getIp = async (): Promise<string> => {
    let ipAdress = '';
    await fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        ipAdress = data.ip;
    })
    return ipAdress;
};

export const getDownloadVelocity = (): Promise<string> => {
    return new Promise((resolve) => {
      let sumOfDuration = 0;
      const image = new Image();
      image.src = 'https://vuejsbr-docs-next.netlify.app/logo.png';
  
      image.addEventListener('load', () => {
        const requests = window.performance.getEntriesByType('resource');
        requests.forEach((request) => {
          sumOfDuration += request.duration;
        });
  
        const averageDuration = sumOfDuration / requests.length;
        const roundedAverageDuration = Math.round(averageDuration);
  
        resolve(`${roundedAverageDuration}ms`);
      });
    });
};

export const getPing = (url: string): any => {
    return new Promise((resolve, reject) => {
        const start = new Date().getTime();

        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                const end = new Date().getTime();
                const pingTime = end - start;
                resolve(pingTime);
            }
        };

        xhr.onerror = function () {
            reject(new Error('Error in request'));
        };

        xhr.open('GET', url, true);
        xhr.send();
    });
};

export const verifyIfUseHTTPS = (): string => {
    if(location.protocol.includes('https')){
        return 'Protected With HTTPS';
    } else {
        return 'Desprotected With HTTP';
    }
};