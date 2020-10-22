    export function toast(message: string, duration = 5000) {
    const toast = document.createElement('ion-toast');
    toast.message = message;
    toast.duration = 2000;
  
    document.body.appendChild(toast);
    return toast.present();
  }
  
  