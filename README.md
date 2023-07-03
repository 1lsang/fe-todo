# fe-todo (Pair Programming)

CLI 입력을 통한 Todo List 프로그램입니다. `$`을 사용하여 세부항목을 지정할 수 있습니다.

### `show`

todo를 조회하는 명령어입니다.

```bash
$ show${type}
```

**type 종류**
- `all`: 상태별 todo의 개수를 출력합니다.
- `{status}` : status에 해당하는 상태의 todo를 출력합니다. 
- `tags` : 태그별 todo의 개수를 출력합니다.
- `tag${tag-content}` : tag-content에 해당하는 tag를 가지고 있는 todo를 모두 출력합니다. 


### add

todo를 추가하는 명령어입니다.

```bash
$ add${todo-content}$[{tags}]
```

### delete

todo를 삭제하는 명령어입니다.

```bash
$ delete${id}
```


### update

todo의 상태를 변경하는 명령어입니다.

```bash
$ update${id}${status}
```

### exit

프로그램을 종료합니다.

```bash
$ exit
```