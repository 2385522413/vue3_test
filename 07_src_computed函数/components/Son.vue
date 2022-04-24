<template>
    <input type="text" v-model="person.firstname"><br>
    <input type="text" v-model="person.lastname"><br>
    <span>全名：{{person.fullname}}</span><br>
    <input type="text" v-model="person.fullname"><br>
</template>
<script>
    import {reactive, computed} from "vue";

    export default {
        name: "Son",
        setup() {
            let person = reactive({
                firstname: "顾",
                lastname: "问"
            });
            //计算属性——简写（没有考虑计算属性被修改的情况）
           /* person.fullname = computed(() => {
                return person.firstname + person.lastname;
            });*/

            //计算属性——完整写法（考虑读和写）
            person.fullname=computed({
                get(){
                    return person.firstname + '-' + person.lastname
                },
                set(value){
                    const nameArr = value.split('-')
                    person.firstname = nameArr[0]
                    person.lastname = nameArr[1]
                }
            })
            return {
                person
            };
        }
    };
</script>


<style scoped>
</style>
