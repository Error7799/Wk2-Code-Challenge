let ShoppingList = document.getElementById("ShoppingList")
            ShoppingList.addEventListener("submit",additem)
            function additem(e){
                e.preventDefault();
                let data = this.elements.typearea.value;
                let list = document.querySelector("ol");
                let item = document.createElement("li");
                let text = document.createElement("p")

                text.textContent = data;
                this.elements.typearea.value = "";
                item.append(text);
                list.append(item);

                let rmvBtn = document.createElement("span")
                rmvBtn.classList.add("remove");
                item.append(rmvBtn);
                rmvBtn.addEventListener("click" , deleteItem)
                item.addEventListener("click" , doneItems)

            }
            function deleteItem(e){
                this.parentElement.remove();
            }
            function doneItems(e){
                this.classList.toggle("done");
            }




