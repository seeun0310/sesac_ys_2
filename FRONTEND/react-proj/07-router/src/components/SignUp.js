import {useForm} from "react-hook-form"

export default function SignUp () {
    const { register, handleSubmit, formState: {errors}, watch } = useForm();

    const onVaild = (data) => {
        console.log("성공적으로 제출되었습니다.", data);
    }

    const onInvaild = (err) => {
        console.log("제출 실패", err);
    }

    const genderRegister = register("gender", {required: '성별은 필수값입니다.'})

    // 실시간 추적
    // console.log(watch("ID"))


    return <>
        <h4>react hook form 테스트</h4>
        {/* handleSubmit(onVaild[, onInvaild]) */}
        {/* onVaild : 폼을 정상적으로 제출할 수 있는 상태일 때, 실행시킬 함수 */}
        {/* onInvaild : (선택값) 폼을 제출할 수 없는 상태일 때, 실행시킬 함수 */}
        
        <form onSubmit={handleSubmit(onVaild, onInvaild)}>
        <fieldset>
        {/* register("ID") => { name: id } */}
            <input type="text" placeholder="아이디를 입력하세요"
            {...register("ID", {required: '아이디는 필수값입니다.'})}  />

            {/* errors.ID가 존자핸다면 errors.ID.message를 띄운다 */}
            {errors.ID?.message}
            <br />
            <input type="text" placeholder="이름을 입력하세요"
            {...register("username", {required: '이름은 필수값입니다.',
            // , minLength: 2
            minLength: {
                value: 2, // 최소값 지정
                message: "이름은 두 글자 이상 입력해야합니다.", // 최소값 만족 못했을 때 발생 메시지
            }
            })}  />
            {errors.username?.message}
            <br />
            <input type="text" placeholder="이메일을 입력하세요"
            {...register("email", {required: '이메일은 필수값입니다.',
            // pattern: {
            //     value: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
            //     message: "올바른 형태의 이메일을 입력해주세요.",
            // }
            // 패턴과 비슷하지만 validate는 커스터마이징 가능
            validate: (v)=> v.includes("gmail.com") || 'gmail을 사용해 주세요'
            }
            )}  />
            {errors.email?.message}
            <br />
            <label htmlFor="gender-man">
            <input type="radio" value="남" id="gender-man" {...genderRegister} /> 남자
            </label>
            <label htmlFor="gender-woman">
            <input type="radio" value="여" id="gender-woman" {...genderRegister} /> 여자
            </label>
            {errors.gender?.message}
            <br />
            <select {...register("option", {required: '옵션은 필수값입니다.'})}>
                <option value="">옵션</option>
                <option value="1">옵션1</option>
                <option value="2">옵션2</option>
                <option value="3">옵션3</option>
            </select>
            {errors.option?.message}
            <br />
            <button type="submit">회원가입</button>
            </fieldset>
        </form>

        <br />
        <br />
        {/* hook form 실습 */}
        {/* <form onSubmit={handleSubmit(onVaild, onInvaild)}>
            <fieldset>
                <input type="text" placeholder="이름" {...register("name", {required: '이름은 필수 항목입니다.'})}></input>
                {errors.name?.message}
                <br />
                <input type="text" placeholder="나이" {...register("age", {
                    validate: (v) => v >= 0 || "0 이상의 숫자만 입력 가능합니다."
                })}></input>
                {errors.age?.message}
                <br />
                <button type="submit">제출</button>
            </fieldset>
        </form> */}
    </>
}