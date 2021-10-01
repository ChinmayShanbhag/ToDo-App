import ModalButtons from 'components/Tasks/Modals/shared/ModalButtons.vue'
import ModalDueTime from 'components/Tasks/Modals/shared/ModalDueTime.vue'
import ModalDueDate from 'components/Tasks/Modals/shared/ModalDueDate.vue'
import ModalTaskName from 'components/Tasks/Modals/shared/ModalTaskName.vue'
import modalHeader from 'components/Tasks/Modals/shared/ModalHeader.vue'


export default{
    methods:{
        submitForm(){
            this.$refs.ModalTaskName.$refs.name.validate()
            if(!this.$refs.ModalTaskName.$refs.name.hasError){
                this.submitTask()
            
            }
        }
    },
    components:{
        modalHeader,
        ModalTaskName,
        ModalDueDate,
        ModalDueTime,
        ModalButtons
    }
    }