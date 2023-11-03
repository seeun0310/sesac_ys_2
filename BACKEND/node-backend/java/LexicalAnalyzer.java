import java.util.Scanner;

public class LexicalAnalyzer {

    // 메소드는 입력 문자열을 받아 정규표현식과 일치하는지 확인합니다.
    public boolean analyze(String input) {
        // 입력 문자열이 정규표현식 (a|b)*bbb(a|b)*에 맞는지 검사합니다.
        return input.matches("(a|b)*bbb(a|b)*");
    }

    public static void main(String[] args) {
        LexicalAnalyzer analyzer = new LexicalAnalyzer();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter a string to analyze (type 'quit' to quit):");

        // 사용자가 'exit'를 입력할 때까지 반복합니다.
        while (true) {
            String inputString = scanner.nextLine();

            // 사용자가 'exit'를 입력하면 반복을 종료합니다.
            if(inputString.equalsIgnoreCase("quit")){
                break;
            }

            // 문자열이 정규표현식과 맞는지 검사합니다.
            boolean matches = analyzer.analyze(inputString);

            // 결과를 출력합니다.1
            if(matches) {
                System.out.println("The string \"" + inputString + "\" matches the pattern.");
            } else {
                System.out.println("The string \"" + inputString + "\" does not match the pattern.");
            }
        }
        // 스캐너를 닫습니다. while 루프 밖에서 한 번만 호출되어야 합니다.
        scanner.close();
    }
}