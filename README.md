# fe-todo (Pair Programming)

CLI 입력을 통한 Todo List 프로그램입니다. `$`을 사용하여 세부항목을 지정할 수 있습니다.

## Pair Programming Rule
- 10분 간 역할 유지후 5분 휴식 반복
- 하던 작업은 마무리 후 역할 변경하기
- 대화를 하면서 둘다 모르는 경우는 구글링, 한사람이 알 경우에는 역할에 관계없이 얘기하면서 서로 배우기
- 흐름을 방해하지 않고 스스로 생각할 수 있도록 너무 세세하게 지시하지 않기

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