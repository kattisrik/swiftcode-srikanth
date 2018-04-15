package data;

public class Message {
public enum Sender {USER,BOT};
    public String text;
    public FeedResponse feedResponse = new FeedResponse();
    public Sender sender;

}
