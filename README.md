## Local test
1.  
```bash
bundle exec jekyll serve
```

## New Project setup
1.  ``` _pages/project/new_project.md ```  
  
    > 用來呈現新的頁面 會將新的html檔在這裡引入   
    > 然後再從project的主頁連結過來   
    
    > 設置permalink和layout   

    ```markdown
    ---
    permalink: /project/new_project
    layout: project.html  
    ---
    ```
    

2.  ```_includes/project/new_project.html```
    > project的html檔

    > 目前不知道css要放哪才能被讀到 只能先用sytle標籤放一起

3. ```layouts/project.html```
    > 在new_project.md中設置的layout

    > 不須每個project都寫一個新的