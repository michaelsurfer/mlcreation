import {observable,computed} from 'mobx'

class Dialog{
    @observable showSelectGenderDialog={
        show:false,
        productID:"BR"
      };
    @observable dialogConfig =
    {
        show:false,
        message:'',
        type:'',
        buttonText:'',
        buttonLink:'',
        buttonType:''
    }

    setSelectGenderDialog(productID){
        this.showSelectGenderDialog.productID = productID
        this.showSelectGenderDialog.show = true
    }

    resetSelectGenderDialog(){
        this.showSelectGenderDialog.show = false

    }

    showDialog(message,buttonType,buttonText,buttonLink){
        this.dialogConfig={
            
            show:true,
            message:message,
            buttonText:buttonText,
            buttonLink:buttonLink,
            buttonType:buttonType
        
    }
    }

    closeDialog(){
        console.log('close dialog')
        this.dialogConfig={
            
                show:false,
                message:'this is a messager',
                buttonText:'close',
                buttonLink:'',
                buttonType:'close'
            
        }
    }


}

export default new Dialog()