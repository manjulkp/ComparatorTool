package utility;



import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import io.restassured.specification.RequestSpecification;

public class RestAssuredHelper {

	public static RequestSpecification Request;

	public String getResponse(String uriPattern) {

		RequestSpecBuilder builder = new RequestSpecBuilder();
		builder.setBaseUri(uriPattern);
		builder.setContentType(ContentType.JSON);
		builder.addHeader("Accept", "application/json");
		Request = RestAssured.given().spec(builder.build());
		ResponseOptions<Response> res = (ResponseOptions<Response>) Request.get();

		return res.getBody().asString();

	}

}