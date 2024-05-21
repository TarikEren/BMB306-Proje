package com.personal.agenda.model;

public class PaymentDetails {

    public class PaymentValidation {

        public static boolean isValidCardNumber(String cardNumber) {
            int nDigits = cardNumber.length();
            int nSum = 0;
            boolean isSecond = false;
            for (int i = nDigits - 1; i >= 0; i--) {
                int d = cardNumber.charAt(i) - '0';
                if (isSecond == true) {
                    d = d * 2;
                }
                nSum += d / 10;
                nSum += d % 10;
                isSecond = !isSecond;
            }
            return (nSum % 10 == 0);
        }
    
        public static boolean isValidExpirationDate(String expirationDate) {
            // YYYY-MM formatında tarih bekleniyor
            try {
                String[] parts = expirationDate.split("-");
                int year = Integer.parseInt(parts[0]);
                int month = Integer.parseInt(parts[1]);
                if (month < 1 || month > 12) {
                    return false;
                }
                java.time.YearMonth expiry = java.time.YearMonth.of(year, month);
                java.time.YearMonth now = java.time.YearMonth.now();
                return !expiry.isBefore(now);
            } catch (Exception e) {
                return false;
            }
        }
    
        public static boolean isValidCVV(String cvv) {
            return cvv.matches("\\d{3}");
        }
    }
    
    private String userId;
    private String cardNumber;
    private String expirationDate;
    private String cvv;

    // Getter ve setterlar
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
    }

    public String getCvv() {
        return cvv;
    }

    public void setCvv(String cvv) {
        this.cvv = cvv;
    }
}